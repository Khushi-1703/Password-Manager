import React from "react";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const getPasswords = async () => {
    let req = await fetch("http://localhost:3000/");
    let passwords = await req.json();
    setPasswordArray(passwords);
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showPassword = () => {
    // alert("Show Password functionality will be implemented soon!");
    passwordRef.current.type = "password";
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    }
  };

  const savePassword = async () => {
    if (
      form.site.length > 10 &&
      form.username.length > 5 &&
      form.password.length > 8
    ) {
      // if any such id exists, delete it first and then add the new one (to handle edits)
      if (form.id) {
        await fetch("http://localhost:3000/", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: form.id }),
        });
      }

      const newEntry = { ...form, id: uuidv4() };
      setPasswordArray([...passwordArray, newEntry]);

      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });

      // otherwise clear the form for new entry
      setForm({ site: "", username: "", password: "" });
      toast.success("Password saved successfully!", {
        position: "top-right",
        autoClose: 5000,
        transition: Zoom,
        style: {
          background: "rgba(219, 234, 254, 0.3)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          color: "#1e40af",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 25px 60px rgba(96, 165, 250, 0.35)",
        },
      });
    } else {
      toast.error("Please provide valid input for all fields!", {
        position: "top-right",
        autoClose: 5000,
        transition: Zoom,
        style: {
          background: "rgba(219, 234, 254, 0.3)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          color: "#1e40af",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 25px 60px rgba(96, 165, 250, 0.35)",
        },
      });
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard! 📋", {
      position: "top-right",
      autoClose: 5000,
      transition: Zoom,
      style: {
        background: "rgba(219, 234, 254, 0.3)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        color: "#1e40af",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 25px 60px rgba(96, 165, 250, 0.35)",
      },
    });
  };

  const editPassword = (id) => {
    setForm({ ...passwordArray.filter((i) => i.id === id)[0], id: id });
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const deletePassword = async (id) => {
    let c = window.confirm("Are you sure you want to delete this password?");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));

      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      toast.success("Password deleted successfully!", {
        position: "top-right",
        autoClose: 5000,
        transition: Zoom,
        style: {
          background: "rgba(219, 234, 254, 0.3)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          color: "#1e40af",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 25px 60px rgba(96, 165, 250, 0.35)",
        },
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(130%_120%_at_50%_0%,#e0ecff_0%,#c7dbf7_50%, #9fc3f0_100%)]"></div>

        {/* animated blobs */}
        <div className="absolute w-100 h-100 bg-blue-300/70 rounded-full blur-[120px] -top-25 -left-25 animate-blob animation-delay-2000"></div>

        <div className="absolute w-100 h-100 bg-blue-300/70 rounded-full blur-[120px] -bottom-25 -left-25 animate-blob animation-delay-2000"></div>

        <div className="absolute w-100 h-100 bg-blue-300/70 rounded-full blur-[120px] -bottom-25 -right-25 animate-blob animation-delay-2000"></div>

        <div className="absolute w-75 h-75 bg-sky-300/70 rounded-full blur-[100px] top-[40%] left-[30%] animate-blob animation-delay-4000"></div>

        <div className="absolute w-75 h-75 bg-sky-300/70 rounded-full blur-[100px] top-[10%] left-[70%] animate-blob animation-delay-4000"></div>
      </div>

      <div className="mycontainer py-5 min-h-[calc(100vh-120px)] flex flex-col animate-[fadeIn_1s_ease]">
        <div className="shrink-0">
          <h1 className="text-4xl font-bold mb-4 text-center text-shadow-lg">
            <span className="text-blue-700"> &lt;</span>
            <span>Pass</span>
            <span className="text-blue-700">Core/&gt;</span>
          </h1>
          <p className="text-lg text-gray-600 text-center text-shadow-lg">
            Your one-stop solution for managing passwords securely
          </p>

          <div className="flex flex-col justify-center gap-4 px-15 py-4">
            <input
              className="rounded-full text-shadow-2xs border-2 border-blue-700/70 w-full px-4 py-1 bg-white/20 backdrop-blur-lg text-blue-800 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_8px_20px_rgba(96,165,250,0.15)]"
              type="text"
              placeholder="Enter Website URL"
              value={form.site}
              onChange={handleChange}
              name="site"
              id="site"
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                className="rounded-full text-shadow-2xs border-2 border-blue-700/70 w-full px-4 py-1 bg-white/20 backdrop-blur-lg text-blue-800 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_8px_20px_rgba(96,165,250,0.15)]"
                type="text"
                placeholder="Enter Username"
                value={form.username}
                onChange={handleChange}
                name="username"
                id="username"
              />

              <div className="relative">
                <input
                  className="rounded-full text-shadow-2xs border-2 border-blue-700/70 w-full px-4 py-1 bg-white/20 backdrop-blur-lg text-blue-800 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_8px_20px_rgba(96,165,250,0.15)]"
                  ref={passwordRef}
                  type="password"
                  placeholder="Enter Password"
                  value={form.password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                />
                <span
                  className="absolute right-1.5 top-[4.5px] cursor-pointer bg-white/30 backdrop-blur-md rounded-full border border-white/40"
                  onClick={showPassword}
                >
                  <img
                    ref={ref}
                    className="p-1"
                    width={26}
                    src="icons/eye.png"
                    alt="Toggle Password Visibility"
                  />
                </span>
              </div>
            </div>

            <button
              onClick={savePassword}
              className="w-full sm:w-auto cursor-pointer rounded-full px-4 py-2 self-center flex items-center justify-center gap-2 bg-linear-to-r from-blue-500/70 to-blue-600/90 backdrop-blur-lg text-white border border-blue-300  hover:scale-105 hover:shadow-[0_15px_40px_rgba(96,165,250,0.5)] transition-all duration-300 shadow-[0_10px_30px_rgba(96,165,250,0.4)]"
            >
              Save Password
              <lord-icon
                src="https://cdn.lordicon.com/dcfmsmpr.json"
                trigger="hover"
                colors="primary:#ffffff"
              ></lord-icon>
            </button>
          </div>

          <h2 className="text-2xl font-bold text-center text-shadow-lg mb-5 mt-3">
            Your Passwords
          </h2>
        </div>

        <div className="passwords flex-1 overflow-y-auto">
          {passwordArray.length === 0 && (
            <div className="flex flex-col items-center gap-2 text-blue-500 py-7">
              <span className="text-4xl text-shadow-md text-shadow-blue-300">
                🔐
              </span>
              <p className="text-lg font-medium text-shadow-md">
                No passwords yet
              </p>
              <p className="text-sm opacity-70 text-shadow-md">
                Start by adding your first one
              </p>
            </div>
          )}

          {passwordArray.length != 0 && (
            <div className="w-full overflow-x-auto">
              <table className="table-auto min-w-150 w-full rounded-md bg-white/10 backdrop-blur-2xl border border-white/30 shadow-[0_30px_80px_rgba(96,165,250,0.2)]">
                <thead className="bg-blue-700 text-white text-shadow-md backdrop-blur-md sticky top-0">
                  <tr>
                    <th className="py-2 border border-white">Site</th>
                    <th className="py-2 border border-white">Username</th>
                    <th className="py-2 border border-white">Password</th>
                    <th className="py-2 border border-white">Actions</th>
                  </tr>
                </thead>

                <tbody className="bg-blue-100 text-gray-600 text-shadow-sm">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="hover:bg-white/20 transition-all duration-200 hover:shadow-[0_0_10px_rgba(96,165,250,0.4)] cursor-pointer"
                      >
                        <td className="py-2 border border-white text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <a
                              href={item.site}
                              target="_blank"
                              className="text-blue-700 hover:underline"
                            >
                              {item.site}
                            </a>
                            <div
                              className="lordiconcopy size-7 cursor-pointer bg-white/30 backdrop-blur-md rounded-full border border-white/40"
                              onClick={() => {
                                copyText(item.site);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                colors="primary:#1b1091"
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  paddingTop: "3px",
                                  filter:
                                    "drop-shadow(0 1px 2px rgba(27,16,145,0.3))",
                                }}
                              ></lord-icon>
                            </div>
                          </div>
                        </td>

                        <td className="py-2 border border-white text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <span>{item.username}</span>
                            <div
                              className="lordiconcopy size-7 cursor-pointer bg-white/30 backdrop-blur-md rounded-full border border-white/40"
                              onClick={() => {
                                copyText(item.username);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                colors="primary:#1b1091"
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  paddingTop: "3px",
                                  filter:
                                    "drop-shadow(0 1px 2px rgba(27,16,145,0.3))",
                                }}
                              ></lord-icon>
                            </div>
                          </div>
                        </td>

                        <td className="py-2 border border-white text-center">
                          <div
                            className="flex items-center justify-center gap-1.5"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <span>{"*".repeat(item.password.length)}</span>
                            <div className="lordiconcopy size-7 cursor-pointer bg-white/30 backdrop-blur-md rounded-full border border-white/40">
                              <lord-icon
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                colors="primary:#1b1091"
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  paddingTop: "3px",
                                  filter:
                                    "drop-shadow(0 1px 2px rgba(27,16,145,0.3))",
                                }}
                              ></lord-icon>
                            </div>
                          </div>
                        </td>

                        <td className="py-2 border border-white text-center flex gap-2 justify-center">
                          <span
                            className="cursor-pointer bg-white/30 backdrop-blur-md rounded-full border border-white/40"
                            onClick={() => {
                              editPassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/gwlusjdu.json"
                              trigger="hover"
                              colors="primary:#1b1091"
                              style={{
                                width: "24px",
                                height: "24px",
                                filter:
                                  "drop-shadow(0 1px 2px rgba(27,16,145,0.3))",
                                paddingTop: "3px",
                              }}
                            ></lord-icon>
                          </span>
                          <span
                            className="cursor-pointer bg-white/30 backdrop-blur-md rounded-full border border-white/40"
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                              colors="primary:#1b1091"
                              style={{
                                width: "24px",
                                height: "24px",
                                filter:
                                  "drop-shadow(0 1px 2px rgba(27,16,145,0.3))",
                                paddingTop: "2px",
                              }}
                            ></lord-icon>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
