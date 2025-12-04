"use client";

import { Dialog, DialogContent, DialogDescription,
    DialogHeader, DialogTitle,
} from "@/components/ui/dialog";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const ManualTriggerDialog = ({
 open, onOpenChange
}: Props) => {
 return (
   <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
     <DialogHeader>
      <DialogTitle>Manual Trigger</DialogTitle>
      <DialogDescription>
        Configure settings for the manual trigger node.
      </DialogDescription>
     </DialogHeader>   
     <div className="py-4">
      <p className="text-sm text-muted-foreground">A manual trigger is a mechanism that starts a process or workflow only when a user explicitly initiates it, rather than it running automatically.</p>
     </div>
    </DialogContent>
   </Dialog> 
 )
}
