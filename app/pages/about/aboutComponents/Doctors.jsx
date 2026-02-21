import DoctorsCard from "../../../items/cards/DoctorsCard";
import React from "react";

const Doctors = () => {
  return (
    <div className=" Doctors-page flex flex-col items-center justify-center gap-10 pb-40 pt-20 ">
      <h1 className="text-[#0643DD] text-5xl font-bold">Doctors</h1>
      <div className="product-list grid grid-cols-3 gap-20">
        <DoctorsCard
          img={"/d4.jpeg"}
          title={"Dr. Magdi El Sheikh"}
          description={
            "A PhD and Professor of Endocrinology, Diabetes, and Obesity, he holds degrees from Al-Azhar University Faculty of Medicine and the University of Minnesota. He specializes in the diagnosis and treatment of endocrine disorders, diabetes, obesity, and weight disorders, with a focus on providing the latest treatment methods and comprehensive medical follow-up."
          }
          name={"Magdi El Sheikh"}
          address={"Heliopolis, 27A Al-Hijaz Street, in front of Maryland Park"}
          mobile={"01044437797"}
          id={"one"}
        />
        <DoctorsCard
          img={"/d2.jpeg"}
          title={"Dr. Ahmed elshorbagy"}
          description={
            "Internal Medicine Specialist in Adult Diabetes and Endocrinology, Adult Hepatology, Adult Nephrology, Adult Gastroenterology and Endoscopy, and General Internal Medicine Consultant in Internal Medicine and Nephrology, Diabetes Diagnosis and Management, and Lecturer in Internal Medicine and Nephrology and Kidney Transplantation at the Faculty of Medicine"
          }
          address={"October: Suad Kafafi"}
          mobile={"01200063622"}
          name={"Ahmed elshorbagy"}
          id={"two"}
        />
        <DoctorsCard
          img={"/d5.jpeg"}
          title={"Dr. ramah mohamed"}
          description={
            "Senior Consultant in Internal Medicine, Diabetes and Endocrinology, specializing in the diagnosis and follow-up of patients with type 1 and type 2 diabetes and gestational diabetes, with a focus on its complications on the kidneys, liver, nerves and blood pressure, in addition to treating glandular and hormonal disorders related to diabetes to ensure comprehensive management of the condition."
          }
          address={"Batal Ahmed Abdel Aziz Street - Above El-Sarfi Pharmacy - Mohandessin"}
          name={"ramah mohamed"}
          mobile={"01066731341"}
          id={"three"}
        />
      </div>
    </div>
  );
};

export default Doctors;
