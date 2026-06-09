import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    // Tables will auto-initialize on first query
    const result = await query("SELECT 1");
    return NextResponse.json({ message: 'Database ready', status: 'ok' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
