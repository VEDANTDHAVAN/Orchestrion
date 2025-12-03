import { NodeProps } from "@xyflow/react";
import { memo } from "react";
import { BaseTriggerNode } from "../../base-trigger-node";
import { MousePointerIcon } from "lucide-react";

export const ManualtriggerNode = memo((props: NodeProps)=> {
    return (
    <>
     <BaseTriggerNode 
      {...props} icon={MousePointerIcon} //status={nodeStatus} TODO
      name="When clicking 'Execute Workflow'"
      //onSettings={handleOpenSettings} TODO
      //onDoubleClick={HandleDoubleClick} TODO
     />  
    </>  
    )
})