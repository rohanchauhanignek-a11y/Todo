import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useDebounce from "../../hooks/useDebounce";

interface Props {
  onSearch: (value: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const { register, watch } = useForm();
  const search = watch("search");
  const debouncedSearch = useDebounce({ value: search, delay: 300 });

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="bg-none p-4">
      <form className="max-w-lg mx-auto" role="search">
        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-white dark:bg-neutral-700 w-full">
          {/* SVG icon */}
          <input
            type="search"
            id="search"
            placeholder="Search..."
            className="text-sm text-slate-900 dark:text-slate-50 w-full outline-none"
            {...register("search")}
          />
        </div>
      </form>
    </div>
  );
}
export default SearchInput;