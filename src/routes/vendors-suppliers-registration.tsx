import { createFileRoute } from "@tanstack/react-router";
import {
  WorkRegistrationForm,
  type SectionConfig,
} from "@/components/registration/WorkingRegistrationForm";

export const Route = createFileRoute("/vendors-suppliers-registration")({
  component: VendorSupplierRegistration,
});

const sections: SectionConfig[] = [
  {
    title: "Business Details",
    fields: [
      {
        name: "company_name",
        label: "Company Name",
        required: true,
      },
      {
        name: "year_established",
        label: "Year Established",
        type: "number",
        required: true,
      },
      {
        name: "legal_entity_type",
        label: "Legal Entity Type",
        type: "select",
        required: true,
        options: ["Proprietorship", "Partnership", "LLP", "Private Limited", "Public Limited"],
      },
      {
        name: "gstin",
        label: "GSTIN",
        required: true,
      },
      {
        name: "pan_number",
        label: "PAN Number",
        required: true,
      },
      {
        name: "msme_registration",
        label: "MSME / Udyam Registration (Optional)",
      },
    ],
  },

  {
    title: "Supply Specialization",
    fields: [
      {
        name: "primary_supply_category",
        label: "Primary Supply Category",
        type: "select",
        required: true,
        options: [
          "Cement & Concrete",
          "Steel & Metal",
          "Bricks & Blocks",
          "Sanitaryware",
          "Tiles & Stone",
          "Electrical Items",
          "Paints & Coatings",
          "Other",
        ],
      },
      {
        name: "monthly_supply_capacity",
        label: "Monthly Supply Capacity",
        type: "select",
        required: true,
        options: ["Below ₹10 Lakhs", "₹10-50 Lakhs", "₹50 Lakhs - ₹2 Crore", "Above ₹2 Crore"],
      },
      {
        name: "geographic_coverage",
        label: "Geographic Coverage",
        type: "select",
        required: true,
        options: ["City/District Only", "Statewide", "Multi-State (Region)", "Pan-India"],
      },
      {
        name: "brands_products",
        label: "Brands / Products You Supply",
        type: "textarea",
        required: true,
      },
    ],
  },

  {
    title: "Contact Details",
    fields: [
      {
        name: "contact_person",
        label: "Contact Person",
        required: true,
      },
      {
        name: "designation",
        label: "Designation",
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
        name: "registered_address",
        label: "Registered Office Address",
        required: true,
      },
      {
        name: "city",
        label: "City",
        required: true,
      },
      {
        name: "state",
        label: "State",
        required: true,
      },
      {
        name: "pin_code",
        label: "PIN Code",
        required: true,
      },
    ],
  },

  {
    title: "Required Documents",
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
        label: "MSME Certificate",
        type: "file",
        accept: ".pdf,image/*",
      },
      {
        name: "product_catalog",
        label: "Product Catalog (PDF)",
        type: "file",
        accept: ".pdf",
      },
      {
        name: "price_list",
        label: "Latest Price List (Optional)",
        type: "file",
        accept: ".pdf",
      },
    ],
  },
];

function VendorSupplierRegistration() {
  return (
    <WorkRegistrationForm
      title="Vendor & Supplier Registration"
      subtitle="Join SLV Builders' trusted network of material suppliers."
      registrationType="vendor_supplier"
      sections={sections}
      submitLabel="Submit Application"
    />
  );
}
