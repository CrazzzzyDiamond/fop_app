import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
    return new NextResponse(JSON.stringify({ answer: "John Doe" }), {
        status: 200,    
    });
}

export async function POST(req: Request) {
    const { name, year, userId } = await req.json();

    console.log(userId)

    try {
        const newRecord = await prisma.incomeTable.create({
            data: {
                name: name,
                year: year,
            },
        });

        console.log('Record added:', newRecord);
        return newRecord;
    } catch (error) {
        console.error('Error adding record:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}