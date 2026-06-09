import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { doc_id } = await params;
    const sql = `SELECT a.app_id, u.full_name AS patient_name, a.appointment_date, a.status 
                 FROM appointments a JOIN users u ON a.patient_id = u.id 
                 WHERE a.doctor_id = ? ORDER BY a.appointment_date DESC`;
    const results = await query(sql, [doc_id]);
    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
