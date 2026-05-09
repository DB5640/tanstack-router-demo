import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
	component: Login,
});

function Login() {
	const {
		authentication: { isLogged, signIn, signOut },
	} = Route.useRouteContext();

	const router = useRouter();

	async function handleSignIn() {
		signIn();
		router.invalidate();
	}

	async function handleSignOut() {
		signOut();
		router.invalidate();
	}

	return (
		<main className="login-page">
			<section className="login-shell">
				{/* <div className="login-hero">
                    <span className="login-eyebrow">Welcome back</span>
                    <h2>Sign in and pick up where you left off.</h2>
                    <p>
                        Track favorites, revisit recent searches, and keep your profile in
                        sync across devices.
                    </p>

                    <div className="login-highlights">
                        <div>
                            <strong>Fast access</strong>
                            <span>Recent activity, saved views, and profile shortcuts.</span>
                        </div>
                        <div>
                            <strong>Clean workflow</strong>
                            <span>
                                One place for search history, favorites, and settings.
                            </span>
                        </div>
                        <div>
                            <strong>Visual demo only</strong>
                            <span>This form is presentational and does not submit.</span>
                        </div>
                    </div>
                </div> */}

				<div className="login-panel">
					{isLogged() ? (
						<div className="login-form">
							<div className="login-status-card">
								<h2>Hello user!</h2>
								<p>You are signed in with a simulated session.</p>
							</div>

							<button
								type="button"
								className="login-submit"
								onClick={handleSignOut}
							>
								Sign out
							</button>
						</div>
					) : (
						<div className="login-form">
							<div className="login-status-card">
								<h2>Login</h2>
								<p>
									This demo uses local storage helpers inside the utils folder
									to simulate authentication.
								</p>
							</div>

							<button
								type="button"
								className="login-submit"
								onClick={handleSignIn}
							>
								Sign in
							</button>
						</div>
					)}

					<div className="login-footer">
						<span>
							{isLogged()
								? "Use sign out to clear the simulated session."
								: "The sign-in button stores a mock session locally."}
						</span>
					</div>

					<Link to="/" className="login-back-link">
						Return home
					</Link>
				</div>
			</section>
		</main>
	);
}
