import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function DELETE(request, { params }) {
  try {
    const { doc_id } = await params;
    const result = await query("SELECT user_id FROM doctors WHERE doc_id = ?", [doc_id]);
    if (result.length === 0) {
      return NextResponse.json({ success: false, message: "Doctor not found" }, { status: 404 });
    }
    const userId = result[0].user_id;
    await query("DELETE FROM doctors WHERE doc_id = ?", [doc_id]);
    await query("DELETE FROM users WHERE id = ?", [userId]);
    return NextResponse.json({ success: true, message: "Doctor removed successfully!" });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
