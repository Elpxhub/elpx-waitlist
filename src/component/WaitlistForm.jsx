import { useState } from "react";
import { supabase } from "../supabaseClient";
import { toast, Toaster } from 'react-hot-toast';

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError(null);

    const { data: _data, error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (error) {
      toast.error('Submission failed. Try again.');
      // setError("Submission failed. Try again.");
    } else {
      setSubmitted(true);
      setEmail("");
    }
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
        <button
          type="submit"
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md shadow-md"
        >
          Join Waitlist
        </button>
        <Toaster position="top-center" />
        {submitted && (
          <p className="text-green-600 text-sm">You're on the waitlist!</p>
        )}
        {/* {error && <p className="text-red-600 text-sm">{error}</p>} */}
      </form>
    </>
  );
}
