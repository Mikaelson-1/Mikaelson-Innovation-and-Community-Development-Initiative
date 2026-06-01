import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

interface Props {
  onClose: () => void;
  open: boolean;
}

export function WireTransferDialog({ onClose, open }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Wire Transfer Details
          </DialogTitle>
          <DialogDescription className="sr-only">
            Bank information for wire transfer.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>Bank Name:</strong> First Bank of Nigeria
          </p>
          <p>
            <strong>Account Name:</strong> Mikaelson Community Development And Tech Initiative
          </p>
          <p>
            <strong>Account Number:</strong> 2048233790
          </p>
          <p className="pt-3 italic text-gray-500 dark:text-gray-400">
            Please email us at{" "}
            <a href="mailto:hello@mikaelsoninitiative.org" className="text-[#5CE1E6] hover:underline">
              hello@mikaelsoninitiative.org
            </a>{" "}
            with your transfer confirmation.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
