import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { MyAppContext } from 'src/pages/_app'
import { ethers } from 'ethers'

function Confirmation({ showConfirmation, setConfirmation, flowResponse }) {
  console.log(
    '🚀 ~ file: Confirmation.jsx:7 ~ Confirmation ~ flowResponse:',
    flowResponse,
  )
  // const { contract, allBets, setAllBets } = useContext(MyAppContext)

  return (
    <>
      {showConfirmation ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Story Created!</h3>
                </div>

                {/*body*/}
                <div className="flex-auto justify-center items-center flex overflow-x-hidden  p-6 pb-1">
                  <p className="my-4 text-slate-500 text-xl leading-relaxed justify-center">
                    Your story was successfully created!
                  </p>
                </div>
                <div className="max-w-sm text-center p-2">
                  <p className="text-lg">Transaction Id</p>
                  <p className="text-sm">58223e3bac1cd7612e0eed .....</p>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setConfirmation(false)}
                  >
                    Close
                  </button>
                  <a
                    href={flowResponse}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    See Transaction
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Confirmation
