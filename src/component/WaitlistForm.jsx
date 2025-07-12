import { useState } from "react";
import { supabase } from "../supabaseClient";
import { toast, Toaster } from "react-hot-toast";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [hasJoined, setHasJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Check if the email already exists
    const { data: existingEmail, error: checkError } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (checkError) {
      toast.error("Something went wrong. Please try again.");
      setIsLoading(false);
      return;
    }

    if (existingEmail) {
      toast.success("You're already on the list. We’ll keep you posted!");
      setHasJoined(true);
      setEmail("");
      setIsLoading(false);
      return;
    }

    // Insert the new email
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (insertError) {
      if (insertError.code === "23505") {
        toast.success("You're already on the list. We’ll keep you posted!");
        setHasJoined(true);
      } else {
        toast.error("Failed to join the waitlist. Please try again.");
      }
    } else {
      toast.success("You're in! We'll let you know when we launch.");
      setHasJoined(true);
      setEmail("");
    }

    setIsLoading(false);
  };

  return (
    <>
      <form className="w-full max-w-[560px]" onSubmit={handleSubmit}>
        <h2 className="font-sans font-semibold text-[16px] leading-6 tracking-normal mt-8">
          Email Address
        </h2>

        <input
          type="email"
          placeholder="Input Email Address"
          className="w-full px-4 p-3 border rounded-md mt-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <motion.button
          type="submit"
          whileHover={{
            scale: !isLoading && !hasJoined ? 1.02 : 1,
            boxShadow:
              !isLoading && !hasJoined
                ? "0 0 12px rgba(34, 197, 94, 0.5)"
                : "none",
          }}
          whileTap={!isLoading && !hasJoined ? { scale: 0.97 } : {}}
          disabled={isLoading || hasJoined}
          className={`w-full mt-6 py-3 rounded-md shadow-md text-white transition-all duration-200 ${
            hasJoined
              ? "bg-green-700 cursor-default opacity-100"
              : isLoading
                ? "bg-green-500 cursor-wait opacity-80"
                : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
              Please wait...
            </span>
          ) : hasJoined ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              You've joined
            </span>
          ) : (
            "Join Waitlist"
          )}
        </motion.button>

        <Toaster position="top-center" />
        {/* {submitted && (
          <p className="text-green-600 text-sm">You're on the waitlist!</p>
        )} */}
        {/* {error && <p className="text-red-600 text-sm">{error}</p>} */}
      </form>
    </>
  );
}
