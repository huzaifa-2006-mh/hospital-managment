import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { patient_id } = await params;
    const sql = `SELECT a.app_id, u.full_name AS doctor_name, d.specialization, 
                 a.appointment_date, a.status 
                 FROM appointments a 
                 JOIN doctors d ON a.doctor_id = d.doc_id 
                 JOIN users u ON d.user_id = u.id 
                 WHERE a.patient_id = ? ORDER BY a.appointment_date DESC`;
    const results = await query(sql, [patient_id]);
    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
