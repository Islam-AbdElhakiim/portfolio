import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MyModal({ isOpen, setIsOpen, status }: any) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-30">
            <div className="flex min-h-full items-center justify-center p-20 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {status == "success" ? (
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Email Sent
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Thank you so much! Your Email has been successfully
                        submitted. and I've sent you an auto-reply email,{" "}
                        <span className=" uppercase font-semibold text-green-500">
                          You're Amazing!
                        </span>
                      </p>
                    </div>

                    <p className=" text-base text-gray-500 mt-10">
                          You can also reach me out on my whatsapp or at my E-mail
                          address.
                        </p>

                        <p className="text-base text-gray-500 my-5">
                          Whatsapp: +201201179651
                          <br />
                          Email: islamabdelhakiim21@gmail.com
                        </p>

                        <div className="flex justify-around my-3 gap-6">
                          <a
                            target="_blank"
                            href="https://wa.me/+2001201179651"
                            className=" bg-green-400 rounded-full text-white flex-1 text-center p-2"
                          >
                            Whatsapp
                          </a>

                          <a
                            href="mailto:islamabdelhakiim21@gmail.com"
                            className="flex-1  bg-blue-400 rounded-full text-white text-center p-2"
                          >
                            Email
                          </a>
                        </div>
                        <div className="mt-6 w-full flex justify-center">
                          <button
                            type="button"
                            className=" w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 "
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button>
                        </div>
                  </Dialog.Panel>
                ) : (
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <span className=" bg-red-500 text-white">Oh No!</span>{" "}
                      couldn't send your email
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className=" text-base text-gray-500">
                        I'm so sorry, it seems that I have an issue with my E-mail
                        server and I couldn't forward your email to my inbox.
                      </p>
                    </div>

                    <div className="flex flex-col mt-5">
                      <Dialog.Title
                        as="h4"
                        className="text-lg font-medium leading-6 text-green-500"
                      >
                        But Hey I still got You!
                      </Dialog.Title>

                      <div className="mt-2">
                        <p className=" text-base text-gray-500">
                          You still can reach me out and I hope to let me know
                          about the email issue on my whatsapp or at my E-mail
                          address.
                        </p>

                        <p className="text-base text-gray-500 my-5">
                          Whatsapp: +201201179651
                          <br />
                          Email: islamabdelhakiim21@gmail.com
                        </p>

                        <div className="flex justify-around my-3 gap-6">
                          <a
                            target="_blank"
                            href="https://wa.me/+2001201179651"
                            className=" bg-green-400 rounded-full text-white flex-1 text-center p-2"
                          >
                            Whatsapp
                          </a>

                          <a
                            href="mailto:islamabdelhakiim21@gmail.com"
                            className="flex-1  bg-blue-400 rounded-full text-white text-center p-2"
                          >
                            Email
                          </a>
                        </div>
                        <div className="mt-6 w-full flex justify-center">
                          <button
                            type="button"
                            className=" w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 "
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
