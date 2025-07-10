import { buildsPageStyles } from "./Builds.styles";
import { useState, useEffect } from "react";
import BuildsFirstSection from "../../components/ui/BuildsElements/BuildsFirstSection/FirstSection";
import BuildsSecondSection from "../../components/ui/BuildsElements/BuildsSecondSection/SecondSection";
import BuildsThirdSection from "../../components/ui/BuildsElements/BuildsThirdSection/ThirdSection";
import computerService from "@services/computerService";
import notify from "@/components/notify";
import { ToastContainer } from "react-toastify";

const Builds = () => {
  const [buildMaker, setBuildMaker] = useState("official");
  const [fetchedBuilds, setFetchedbuilds] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [buildType, setBuildType] = useState("Gaming");

  const [block, setBlock] = useState(false);

  useEffect(() => {
    setPage(1);
    setSearch("");

    fetchBuilds(buildMaker);
    setBlock(true);
  }, [buildMaker]);

  useEffect(() => {
    if (!block) return;

    fetchBuilds(buildMaker);
  }, [page]);

  useEffect(() => {
    if (!block) return;

    setPage(1);
    fetchBuilds(buildMaker);
  }, [buildType]);

  useEffect(() => {
    if (!block) return;

    let timeout;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      setPage(1);
      fetchBuilds(buildMaker);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search]);

  const fetchBuilds = async function (build) {
    setIsLoading(true);

    try {
      let res;
      switch (build) {
        case "official":
          res = await computerService.getAdminPublicComputersList(
            page,
            limit,
            search,
            buildType
          );
          break;

        case "user":
          res = await computerService.getUserPublicComputersList(
            page,
            limit,
            search,
            buildType
          );
          break;
      }
      if (res.status === 200) {
        setFetchedbuilds(res.data.data);
        setTotalPages(res.data.meta.totalPages);
      }
    } catch (e) {
      notify("Error collectiong builds", "error");
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={buildsPageStyles.buildsPage}>
      <ToastContainer
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
      />
      <BuildsFirstSection />
      <div className="flex mr-20 ml-20">
        <BuildsSecondSection
          buildType={buildType}
          setBuildType={setBuildType}
        />
        <BuildsThirdSection
          builds={fetchedBuilds}
          type={buildMaker}
          setSearch={setSearch}
          setType={setBuildMaker}
        />
      </div>
    </div>
  );
};

export default Builds;
