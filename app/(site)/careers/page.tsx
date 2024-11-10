import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - PP Design and Tech",
  description: "Join Our Team",
  // other metadata
};

const CareersPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="flex items-center justify-center min-h-screen py-auto lg:py-25 xl:py-30">
          <div className="text-center">
            No Vacancies Available
          </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default CareersPage;
