import { useAppKit } from "@reown/appkit/react";
import { Button } from "@/components/ui/button";

export default function ConnectButton() {
  const { open } = useAppKit();

  return (
    <Button
      className="border border-primary text-primary  py-2 px-6 bg-transparent hover:bg-transparent
          text-sm cursor-pointer hover:scale-[0.95] active:scale-[0.99] transition-all duration-400 ease-in-out"
      onClick={() => open()}
    >
      Connect wallet
    </Button>
  );
}
