import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request) {
  try {
    const { patient_id, doctor_id, appointment_date } = await request.json();
    await query(
      "INSERT INTO appointments (patient_id, doctor_id, appointment_date, status) VALUES (?, ?, ?, 'pending')",
      [patient_id, doctor_id, appointment_date]
    );
    return NextResponse.json({ success: true, message: "Appointment booked successfully!" });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
