import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface TimeSlot {
    id: string;
    date: string;
    time: string;
    duration_minutes: number;
    is_available: boolean;
}

export interface Booking {
    id: string;
    time_slot_id: string | null;
    client_name: string;
    client_phone: string;
    message: string | null;
    status: string;
    created_at: string;
}
