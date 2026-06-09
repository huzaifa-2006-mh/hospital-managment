import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const [doctors] = await Promise.all([
      query("SELECT COUNT(*) as count FROM doctors")
    ]);
    const [patients] = await Promise.all([
      query("SELECT COUNT(*) as count FROM users WHERE role = 'patient'")
    ]);
    const [appointments] = await Promise.all([
      query("SELECT COUNT(*) as count FROM appointments")
    ]);
    const [pending] = await Promise.all([
      query("SELECT COUNT(*) as count FROM appointments WHERE status = 'pending'")
    ]);

    return NextResponse.json({
      totalDoctors: doctors[0].count,
      totalPatients: patients[0].count,
      totalAppointments: appointments[0].count,
      pendingAppointments: pending[0].count,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
