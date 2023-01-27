import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { FormAddItem } from "./FormAddItem";

export function ModalAddImage({imgs, setImgs}) {
  return (
    <Dialog.Root>
        <Dialog.Trigger className="sticky bg-orange-500 rounded-md top-0 flex items-center justify-center h-48 w-full outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-800">
          <Plus size={35} className="text-zinc-800" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/70" />
          <Dialog.Content className="fixed w-4/5 lg:w-2/5 max-w-[400px] p-7 rounded-lg left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-zinc-800">
            <Dialog.Title className="text-xl text-slate-100 font-semibold mb-4">
              Escolha sua imagem
            </Dialog.Title>
            <Dialog.Close className="absolute rounded-sm top-3 right-3 outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-zinc-800">
              <X size={20} className="text-orange-500" />
            </Dialog.Close>
            <FormAddItem imgs={imgs} setImgs={setImgs} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  )
}