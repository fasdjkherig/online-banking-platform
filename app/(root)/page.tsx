import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar ";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect("/sign-in");

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1350.35}
          />
        </header>
        RecentTransactions
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 4400 }, { currentBalance: 3500 }]}
      />
    </section>
  );
};

export default Home;
