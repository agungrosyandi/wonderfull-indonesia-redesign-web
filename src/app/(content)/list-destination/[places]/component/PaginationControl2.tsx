import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearch } from "@/hooks/useSearch";
import { PaginationControlProps } from "@/utils/type";

export default function PaginationControl2({
  places,
  page,
}: PaginationControlProps) {
  const { totalCount } = useSearch();

  const previousPath =
    page > 1 ? `/list-destination/${places}?page=${page - 1}` : "";

  const nextPath =
    totalCount > 6 * page ? `/list-destination/${places}?page=${page + 1}` : "";

  return (
    <section className="relative col-span-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {previousPath ? <PaginationPrevious href={previousPath} /> : null}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            {nextPath && <PaginationNext href={nextPath} />}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}
