import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";

//Components
import { FormAddItem } from "./FormAddItem";

export function ModalAddImage() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="sticky top-3 bg-green-500 rounded-md flex items-center justify-center h-48 w-full outline-none hover:ring-2 hover:ring-green-500 hover:ring-offset-2 hover:ring-offset-zinc-300 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zinc-300  dark:hover:ring-offset-zinc-700 dark:focus:ring-offset-zinc-700">
        <Plus size={35} className="text-zinc-100" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70" />
        <Dialog.Content className="fixed w-4/5 lg:w-2/5 max-w-[400px] p-7 rounded-lg left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-zinc-300 dark:bg-zinc-700">
          <Dialog.Title className="text-xl text-zinc-700 dark:text-zinc-300 font-bold mb-4">
            Escolha sua imagem
          </Dialog.Title>
          <Dialog.Close className="absolute rounded-sm top-3 right-3 outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-300 dark:focus:ring-zinc-700 dark:focus:ring-offset-zinc-300">
            <X size={20} className="text-zinc-800 dark:text-zinc-300" />
          </Dialog.Close>
          <FormAddItem />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
