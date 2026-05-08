import { createFileRoute, useNavigate } from '@tanstack/react-router'
import * as z from 'zod'

const CategorySchema = z.enum(["electronics", "clothing", "books", "home", "toys"])

const SearchSchema = z.object({
    query: z.string().optional(),
    hasDiscount: z.boolean().optional(),
    categories: z.array(CategorySchema).optional(),
})

export const Route = createFileRoute('/search')({
    validateSearch: SearchSchema,
    component: SearchComponent,
})

function SearchComponent() {
    const { categories, query, hasDiscount } = Route.useSearch();
    const navigate = useNavigate({ from: Route.fullPath })
    return (
        <>
            <h1>Search</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => {
                    navigate({ search: (prev) => ({ ...prev, query: e.target.value }) })
                }}
                placeholder="Search query"
            />
            <label>
                <input
                    type="checkbox"
                    checked={hasDiscount}
                    onChange={(e) => {
                        navigate({ search: (prev) => ({ ...prev, hasDiscount: e.target.checked }) })
                    }}
                />
                Has Discount
            </label>
            <div>
                Categories:
                {CategorySchema.options.map((category) => (
                    <label key={category}>
                        <input
                            type="checkbox"
                            checked={categories?.includes(category)}
                            onChange={(e) => {
                                navigate({
                                    search: (prev) => {
                                        const newCategories = e.target.checked
                                            ? [...(prev.categories || []), category]
                                            : (prev.categories || []).filter((c) => c !== category)
                                        return { ...prev, categories: newCategories }
                                    },
                                })
                            }}
                        />
                        {category}
                    </label>
                ))}
            </div>
            <pre>{JSON.stringify({ categories, query, hasDiscount }, null, 2)}</pre>
        </>
    )
}
