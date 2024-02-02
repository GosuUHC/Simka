import { useSelector } from "react-redux";

const useFAQData = () => {
  const { FAQData } = useSelector((state) => state.main);

  return { FAQData };
};

export { useFAQData };
