import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const userId = searchParams.get('userId') as string;

    try {
        const records = await prisma.incomeTable.findMany({
            where: {
                user_id: userId,
            },
        });

        console.log('Records found:', records);
        return NextResponse.json(records);
    } catch (error) {
        console.error('Error fetching records:', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function POST(req: NextRequest) {
    const { name, year, userId } = await req.json();

    try {
        const newRecord = await prisma.incomeTable.create({
            data: {
                user_id: userId,
                name: name,
                year: year,
            },
        });

        console.log('Record added:', newRecord);
        return NextResponse.json(newRecord, { status: 201 });
    } catch (error) {
        console.error('Error adding record:', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json();

    try {
        const deletedRecord = await prisma.incomeTable.delete({
            where: {
                id: id,
            },
        });

        console.log('Record deleted:', deletedRecord);
        return NextResponse.json(deletedRecord);
    } catch (error) {
        console.error('Error deleting record:', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}