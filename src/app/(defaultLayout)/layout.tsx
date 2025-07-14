import MyContainer from "@/components/common/MyContainer";
import FooterBar from "@/components/shared/FooterBar";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run Courier",
  description:
    "Run Courier provides same day courier services in London. Fast, affordable delivery for medical, retail, legal, and multi-drop jobs across Greater London and beyond.",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <MyContainer>
        <header>
          <Navbar />
        </header>
        <div>{children}</div>
      </MyContainer>
      <footer>
        <FooterBar />
      </footer>
    </main>
  );
};

export default CommonLayout;
