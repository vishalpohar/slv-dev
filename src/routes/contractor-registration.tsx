import { createFileRoute } from "@tanstack/react-router";
import {
  WorkRegistrationForm,
  type SectionConfig,
} from "@/components/registration/WorkingRegistrationForm";

export const Route = createFileRoute("/contractor-registration")({
  component: ContractorRegistration,
});

const sections: SectionConfig[] = [
  {
    title: "Company Details",
    fields: [
      {
        name: "company_firm_name",
        label: "Company / Firm Name",
        required: true,
      },
      {
        name: "registration_type",
        label: "Registration Type",
        type: "select",
        required: true,
        options: ["Proprietorship", "Partnership", "LLP", "Private Limited"],
      },
      {
        name: "gst_number",
        label: "GST Number",
        required: true,
      },
      {
        name: "pan_number",
        label: "PAN Number",
        required: true,
      },
    ],
  },

  {
    title: "Contact Information",
    fields: [
      {
        name: "contact_person",
        label: "Contact Person",
        required: true,
      },
      {
        name: "mobile_number",
        label: "Mobile Number",
        type: "tel",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
      },
      {
        name: "landline",
        label: "Landline (Optional)",
      },
    ],
  },

  {
    title: "Service Details",
    fields: [
      {
        name: "contractor_type",
        label: "Contractor Type",
        type: "select",
        required: true,
        options: [
          "Civil Construction",
          "Electrical",
          "Plumbing",
          "HVAC",
          "Interior Finishing",
          "Structural Work",
          "Landscape",
          "Other",
        ],
      },
      {
        name: "experience",
        label: "Years of Experience",
        type: "select",
        required: true,
        options: ["1-3 Years", "3-5 Years", "5-10 Years", "10+ Years"],
      },
      {
        name: "team_size",
        label: "Team Size",
        type: "select",
        required: true,
        options: ["1-10 Workers", "10-25 Workers", "25-50 Workers", "50+ Workers"],
      },
      {
        name: "notable_projects",
        label: "Notable Projects (Brief Description)",
        type: "textarea",
      },
    ],
  },

  {
    title: "Document Uploads",
    fields: [
      {
        name: "gst_certificate",
        label: "GST Certificate",
        type: "file",
        accept: ".pdf,image/*",
        required: true,
      },
      {
        name: "pan_card",
        label: "PAN Card",
        type: "file",
        accept: ".pdf,image/*",
        required: true,
      },
      {
        name: "msme_certificate",
        label: "MSME Certificate (Optional)",
        type: "file",
        accept: ".pdf,image/*",
      },
      {
        name: "work_samples",
        label: "Work Samples (Photos/PDF)",
        type: "file",
        accept: ".pdf,image/*",
      },
    ],
  },
];

function ContractorRegistration() {
  return (
    <WorkRegistrationForm
      title="Contractor Registration"
      subtitle="Partner with SLV Builders for premium construction projects."
      registrationType="contractor"
      sections={sections}
      submitLabel="Apply as Contractor"
    />
  );
}
