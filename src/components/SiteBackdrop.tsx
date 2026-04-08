export default function SiteBackdrop() {
    return (
        <div className="test2-page-background" style={{ position: "fixed", inset: 0, zIndex: 0 }} aria-hidden="true">
            <div className="test2-page-background__base" />
            <div className="test2-page-background__dotfield" />

            <div className="test2-page-background__blob test2-page-background__blob--light-1" />
            <div className="test2-page-background__blob test2-page-background__blob--light-2" />
            <div className="test2-page-background__blob test2-page-background__blob--light-3" />
            <div className="test2-page-background__blob test2-page-background__blob--mid-1" />
            <div className="test2-page-background__blob test2-page-background__blob--mid-2" />

            <div className="test2-page-background__vignette" />
        </div>
    );
}
