import moment from "moment";

export interface FormFieldDto<V> {
  value: V;
  validator:
    | "text"
    | "number"
    | "date"
    | "object"
    | "array"
    | "dates"
    | "email"
    | "mobile"
    | null;
  isRequired: boolean;
  error: string | null;
  disable: boolean;
  readonly: boolean;
  max?: number;
  min?: number;
  charLength?: number[];
}
