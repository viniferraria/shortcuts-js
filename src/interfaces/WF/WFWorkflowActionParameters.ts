import WFAskActionDateGranularity from './WFAskActionDateGranularity';
import WFCondition from './WFCondition';
import WFCountType from './WFCountType';
import WFFlashlightSetting from './WFFlashlightSetting';
import WFGetDictionaryValueType from './WFGetDictionaryValueType';
import WFHTTPBodyType from './WFHTTPBodyType';
import WFHTTPMethod from './WFHTTPMethod';
import WFInputType from './WFInputType';
import WFMathOperation from './WFMathOperation';
import WFSerialization from './WFSerialization';

interface WFWorkflowActionParameters {
  Advanced?: boolean;
  CustomOutputName?: string;
  GroupingIdentifier?: string;
  OnValue?: boolean;
  ShowHeaders?: boolean;
  Text?: WFSerialization | string;
  UUID?: string;
  WFAskActionDateGranularity?: WFAskActionDateGranularity;
  WFAskActionDefaultAnswer?: WFSerialization | string;
  WFAskActionPrompt?: WFSerialization | string;
  WFBrightness?: number;
  WFCommentActionText?: string;
  WFCondition?: WFCondition;
  WFConditionalActionString?: string;
  WFControlFlowMode?: number;
  WFCountType?: WFCountType;
  WFDelayTime?: number;
  WFDictionaryKey?: string;
  WFDontIncludeFileExtension?: boolean;
  WFFlashlightSetting?: WFFlashlightSetting;
  WFFormValues?: WFSerialization;
  WFGetDictionaryValueType?: WFGetDictionaryValueType;
  WFHTTPBodyType?: WFHTTPBodyType;
  WFHTTPHeaders?: WFSerialization;
  WFHTTPMethod?: WFHTTPMethod;
  WFInputType?: WFInputType;
  WFJSONValues?: WFSerialization;
  WFMathOperand?: number;
  WFMathOperation?: WFMathOperation;
  WFMenuItems?: string[];
  WFMenuItemTitle?: string;
  WFMenuPrompt?: string;
  WFName?: string;
  WFNotificationActionTitle?: string;
  WFNotificationActionBody?: string;
  WFNotificationActionSound?: boolean;
  WFNumberActionNumber?: number;
  WFNumberValue?: number;
  WFShowWorkflow?: boolean;
  WFSSHHost?: WFSerialization | string;
  WFSSHPassword?: WFSerialization | string;
  WFSSHPort?: WFSerialization | string;
  WFSSHScript?: WFSerialization | string;
  WFSSHUser?: WFSerialization | string;
  WFTextActionText?: WFSerialization | string;
  WFURLActionURL?: string;
  WFVariable?: WFSerialization | string;
  WFVariableName?: string;
  WFWorkflowName?: string;
}

export default WFWorkflowActionParameters;
