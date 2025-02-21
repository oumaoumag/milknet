import { NextResponse } from 'next/server';
import { connectToContract } from '@/lib/blockchain';

export async function POST(request: Request) {
  const { listingData, digitalSignature } = await request.json();
  
  try {
    const contract = await connectToContract();
    const tx = await contract.createListing(
      listingData,
      digitalSignature
    );
    
    return NextResponse.json({
      success: true,
      transactionHash: tx.hash,
      qrCode: generateQR(tx.hash)
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Blockchain transaction failed' },
      { status: 500 }
    );
  }
} 