import { PuffLoader } from "react-spinners";

interface PuffLoaderSpinnerProps {
  isLoading: boolean;
}

export default function PuffLoaderSpinner({
  isLoading,
}: PuffLoaderSpinnerProps) {
  return <PuffLoader loading={isLoading} />;
}
