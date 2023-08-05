"use client";

import Image from 'next/image'
import QRCode from "react-qr-code";
import SweetAlert from 'sweetalert2';
import { useState } from 'react';

export default function Home() {

  const [qrCode, setQrCode] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const generateQrCode = (e) => {
    SweetAlert.showLoading();
    e.preventDefault();
    if(link === "") {
      SweetAlert.fire({
        title: 'Error!',
        text: 'Please enter a link',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }

    setQrCode(link);

    SweetAlert.fire({
      title: 'Success!',
      text: 'Your QR Code has been generated',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 mb-8 gap-8">
      <h1 className="text-4xl font-bold text-center">
        Welcome to QR Code Generator
      </h1>
      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col items-center justify-center">
          <form action="" className='flex flex-col' onSubmit={(e) => e.preventDefault }>
            <label htmlFor="">Put Your Link Here</label>
            <input type="text" onChange={(e) => setLink(e.target.value)} className="border-2 border-gray-400 rounded-md p-2 mb-2" />
            <button className="bg-blue-200 p-4 rounded-lg" onClick={generateQrCode}>
              Generate QR Code Now
            </button>
          </form>
        </div>
        <div>
          {qrCode !== "" && <QRCode value={qrCode} />}
        </div>

      </div>
    </main>
  )
}
