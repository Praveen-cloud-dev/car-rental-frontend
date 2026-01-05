import API from "./api";

export const createContactEnquiryApi = (data) => {
  return API.post("/contact-enquiry/create", data);
};

export const getAllContactEnquiriesApi = () => {
  return API.get("/contact-enquiry/all");
};
