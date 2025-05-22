function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="bg-gray-900  rounded-2xl p-8 w-full max-w-sm m-5">
        <h2 className="text-2xl font-bold text-purple-500 text-center mb-6">
          LOGIN
        </h2>
        <form className="space-y-4 novalidate">
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2 validator">
              <svg
                className="h-5 w-5 opacity-50 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                type="text"
                placeholder="Username"
                className="w-full"
                required
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength="3"
                maxLength="30"
              />
            </label>
            <p className="validator-hint hidden">
              Must be 3 to 30 characters
              <br />
              containing only letters, numbers or dash
            </p>
            <p className="font-medium text-[12px] text-[oklch(71%_0.194_13.428)] hidden">
              Username taken!
            </p>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2 validator">
              <svg
                className="h-5 w-5 opacity-50 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </svg>
              <input
                type="password"
                placeholder="Password"
                className="w-full"
                required
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
          </div>
          <button
            className="btn w-full border-0 bg-purple-500 shadow-lg shadow-purple-500/50"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
