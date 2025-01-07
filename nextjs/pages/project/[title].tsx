import Detail from "@/components/common/Detail";
import { COLLECTIONS, PATHS } from "@/shared/constants";
import { useRouter } from "next/router";

const BlogDetail: React.FC = () => {
  const router = useRouter();
  const { title } = router.query;

  const query = { title };
  return (
    <Detail
      redirect={PATHS.PROJECT.ROOT}
      collection={COLLECTIONS.PROJECT.POSTS}
      query={query}
    />
  );
};

export default BlogDetail;
