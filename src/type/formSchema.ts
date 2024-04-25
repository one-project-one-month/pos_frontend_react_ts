import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3),
  staffCode: z.string().email(),
  password: z.string().min(6),
  customerCode: z.string(),
  customerName: z.string(),
  mobileNo: z.number(),
  dateOfBirth: z.date(),
  gender: z.enum(["male", "female", "other"]),
  stateCode: z.string(),
  townshipCode: z.string(),
  staffName: z.string(),
  address: z.string(),
  position: z.string(),
  shopCode: z.string(),
  shopName: z.string(),
  productCode: z.string(),
  productName: z.string(),
  price: z.number().min(1),
  productCategoryCode: z.string(),
  productCategoryName: z.string(),
  customerMobileNo: z.number(),
  customerStateCode: z.number(),
  customerTownShipCode: z.number(),
  customerDOB: z.string(),
});

export type Inputs = z.infer<typeof formSchema>;
