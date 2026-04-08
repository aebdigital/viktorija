"use client";

import { useEffect, useRef, useState } from "react";

const SALON_LOCATION = {
    lat: 48.14622752109185,
    lng: 17.124899473013688,
};

const SALON_MAPS_URL =
    "https://www.google.com/maps/place//data=!4m2!3m1!1s0x476c893f6282c159:0xcb0c29487a5d69b4?sa=X&ved=1t:8290&ictx=111";


const MAP_STYLES = [
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "transit",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "road",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
    },
];

declare global {
    interface Window {
        google?: any;
        __googleMapsLoaderPromise?: Promise<any>;
        __googleMapsLoaderCallback__?: () => void;
    }
}

function loadGoogleMaps(apiKey: string, mapId: string) {
    if (typeof window === "undefined") {
        return Promise.reject(new Error("Google Maps can only load in the browser."));
    }

    if (window.google?.maps?.importLibrary) {
        return Promise.resolve(window.google.maps);
    }

    if (window.__googleMapsLoaderPromise) {
        return window.__googleMapsLoaderPromise;
    }

    window.__googleMapsLoaderPromise = new Promise((resolve, reject) => {
        const existingScript = document.querySelector<HTMLScriptElement>(
            'script[data-google-maps-loader="true"]'
        );

        if (existingScript) {
            existingScript.addEventListener("load", () => resolve(window.google?.maps), {
                once: true,
            });
            existingScript.addEventListener("error", () => reject(new Error("Failed to load Google Maps.")), {
                once: true,
            });
            return;
        }

        window.__googleMapsLoaderCallback__ = () => {
            resolve(window.google?.maps);
            delete window.__googleMapsLoaderCallback__;
        };

        const script = document.createElement("script");
        script.dataset.googleMapsLoader = "true";
        script.async = true;
        script.defer = true;
        script.onerror = () => reject(new Error("Failed to load Google Maps."));
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly&libraries=marker&map_ids=${mapId}&callback=__googleMapsLoaderCallback__`;

        document.head.appendChild(script);
    });

    return window.__googleMapsLoaderPromise;
}

type ExtraMarker = {
    lat: number;
    lng: number;
    label: string;
    imageSrc?: string;
    name?: string;
    address?: string;
};

type GoogleMapProps = {
    className?: string;
    heightClassName?: string;
    title?: string;
    extraMarkers?: ExtraMarker[];
};

export default function GoogleMap({
    className = "",
    heightClassName = "h-full",
    title = "Salón Viktória - mapa",
    extraMarkers = [],
}: GoogleMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [loadState, setLoadState] = useState<"loading" | "ready" | "error">("loading");

    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID;

        if (!apiKey || !mapId || !mapRef.current) {
            setLoadState("error");
            return;
        }

        let isCancelled = false;
        let marker: any;
        const extraMarkerInstances: any[] = [];

        const initMap = async () => {
            try {
                const maps = await loadGoogleMaps(apiKey, mapId);
                const [{ Map, InfoWindow }, { AdvancedMarkerElement, PinElement }] = await Promise.all([
                    maps.importLibrary("maps"),
                    maps.importLibrary("marker"),
                ]);

                if (isCancelled || !mapRef.current) {
                    return;
                }

                const map = new Map(mapRef.current, {
                    center: SALON_LOCATION,
                    zoom: 16.2,
                    mapId,
                    disableDefaultUI: true,
                    clickableIcons: false,
                    gestureHandling: "cooperative",
                    keyboardShortcuts: false,
                    styles: MAP_STYLES,
                });

                const infoWindow = new InfoWindow({
                    disableAutoPan: false,
                });

                const makeInfoContent = (name: string, address: string, imageSrc?: string) =>
                    `<div class="gmap-popup">${imageSrc ? `<img class="gmap-popup__photo" src="${imageSrc}" alt="${name}" />` : ""}<strong class="gmap-popup__name">${name}</strong><span class="gmap-popup__address">${address}</span></div>`;

                const pin = document.createElement("button");
                pin.type = "button";
                pin.className = "google-map-pin";
                pin.setAttribute("aria-label", "Zobraziť informácie o Salón Viktória");
                pin.innerHTML =
                    '<span class="google-map-pin__badge"></span><img class="google-map-pin__image" src="/output-onlinepngtools-removebg-preview.png" alt="" />';

                marker = new AdvancedMarkerElement({
                    map,
                    position: SALON_LOCATION,
                    title: "Salón Viktória",
                    content: pin,
                });

                marker.addListener("click", () => {
                    infoWindow.setContent(makeInfoContent("Salón Viktória", "Mlynské Nivy 10, 821 09 Bratislava", "/twincity.jpg"));
                    infoWindow.open({ anchor: marker, map });
                });

                for (const extra of extraMarkers) {
                    let content: HTMLElement;
                    if (extra.imageSrc) {
                        const el = document.createElement("div");
                        el.className = "google-map-pin google-map-pin--extra";
                        el.setAttribute("aria-label", extra.label);
                        el.innerHTML = `<span class="google-map-pin__badge"></span><img class="google-map-pin__image" src="${extra.imageSrc}" alt="" />`;
                        content = el;
                    } else {
                        const pinEl = new PinElement({
                            background: "#EEE3CE",
                            borderColor: "#1D0E22",
                            glyphColor: "#1D0E22",
                            glyph: extra.label,
                        });
                        content = pinEl.element;
                    }
                    const extraMarker = new AdvancedMarkerElement({
                        map,
                        position: { lat: extra.lat, lng: extra.lng },
                        title: extra.name ?? extra.label,
                        content,
                    });
                    if (extra.name || extra.address) {
                        const popupName = extra.name ?? extra.label;
                        const popupAddress = extra.address ?? "";
                        extraMarker.addListener("click", () => {
                            infoWindow.setContent(makeInfoContent(popupName, popupAddress, extra.imageSrc));
                            infoWindow.open({ anchor: extraMarker, map });
                        });
                    }
                    extraMarkerInstances.push(extraMarker);
                }

                setLoadState("ready");
            } catch {
                if (!isCancelled) {
                    setLoadState("error");
                }
            }
        };

        initMap();

        return () => {
            isCancelled = true;
            if (marker) {
                marker.map = null;
            }
            for (const m of extraMarkerInstances) {
                m.map = null;
            }
        };
    }, [extraMarkers]);

    return (
        <div className={`relative w-full overflow-hidden ${heightClassName} ${className}`.trim()}>
            <div ref={mapRef} className="h-full w-full" aria-label={title} />

            <a
                href={SALON_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 z-[1] rounded-full border border-white/30 bg-[#1D0E22]/80 px-4 py-2 text-[11px] font-montserrat uppercase tracking-[0.24em] text-[#EEE3CE] backdrop-blur-sm transition-opacity hover:opacity-90"
            >
                Otvoriť mapu
            </a>

            {loadState !== "ready" ? (
                <div className="absolute inset-0 flex items-center justify-center bg-[#A9AFB9]/70 backdrop-blur-[2px]">
                    <div className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-[11px] font-montserrat uppercase tracking-[0.24em] text-[#1D0E22]">
                        {loadState === "error" ? "Mapa sa nepodarilo načítať" : "Načítavam mapu"}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
