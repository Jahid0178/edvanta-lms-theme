import { categories } from "@/data";
import CategoryCard from "@/components/cards/CategoryCard";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const CategoriesPage = () => {
  return (
    <section className="section bg-linear-to-t from-white to-blue-200/50">
      <div className="container mt-[52px]">
        {/* Page Header */}
        <header aria-labelledby="categories-heading">
          <SectionHeader
            title="Explore All"
            highlight="Categories"
            description="Browse our extensive collection of course categories and find your perfect learning path"
            position="center"
            className="w-full max-w-[728px] mx-auto"
            titleClassName="text-5xl"
          />
        </header>

        {/* Categories List */}
        <section
          aria-labelledby="categories-list-heading"
          className="mt-[52px]"
        >
          <h2
            id="categories-list-heading"
            className="sr-only"
          >
            Course Categories
          </h2>

          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[52px]"
            role="list"
          >
            {categories.map((category) => (
              <li key={category.id}>
                <CategoryCard category={category} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default CategoriesPage;
