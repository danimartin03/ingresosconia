declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"apps-shopify-imprescindibles-vender-mas.mdx": {
	id: "apps-shopify-imprescindibles-vender-mas.mdx";
  slug: "apps-shopify-imprescindibles-vender-mas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"automatizar-ecommerce-ia-guia-completa.mdx": {
	id: "automatizar-ecommerce-ia-guia-completa.mdx";
  slug: "automatizar-ecommerce-ia-guia-completa";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"claude-ai-para-productividad-negocio.mdx": {
	id: "claude-ai-para-productividad-negocio.mdx";
  slug: "claude-ai-para-productividad-negocio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"como-ganar-dinero-con-chatgpt-2025.mdx": {
	id: "como-ganar-dinero-con-chatgpt-2025.mdx";
  slug: "como-ganar-dinero-con-chatgpt-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"crear-contenido-ia-que-vende-espana.mdx": {
	id: "crear-contenido-ia-que-vende-espana.mdx";
  slug: "crear-contenido-ia-que-vende-espana";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"crear-tienda-shopify-espana-paso-a-paso.mdx": {
	id: "crear-tienda-shopify-espana-paso-a-paso.mdx";
  slug: "crear-tienda-shopify-espana-paso-a-paso";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"dropshipping-espana-guia-honesta-2025.mdx": {
	id: "dropshipping-espana-guia-honesta-2025.mdx";
  slug: "dropshipping-espana-guia-honesta-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"ecommerce-espana-empezar-poco-presupuesto.mdx": {
	id: "ecommerce-espana-empezar-poco-presupuesto.mdx";
  slug: "ecommerce-espana-empezar-poco-presupuesto";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"estrategias-aumentar-ventas-shopify.mdx": {
	id: "estrategias-aumentar-ventas-shopify.mdx";
  slug: "estrategias-aumentar-ventas-shopify";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"freelance-digital-espana-vivir-trabajando-online.mdx": {
	id: "freelance-digital-espana-vivir-trabajando-online.mdx";
  slug: "freelance-digital-espana-vivir-trabajando-online";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"freelance-shopify-espana-ganar-dinero.mdx": {
	id: "freelance-shopify-espana-ganar-dinero.mdx";
  slug: "freelance-shopify-espana-ganar-dinero";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"ganar-dinero-internet-espana-metodos-reales.mdx": {
	id: "ganar-dinero-internet-espana-metodos-reales.mdx";
  slug: "ganar-dinero-internet-espana-metodos-reales";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"marketing-afiliados-espana-primeros-euros.mdx": {
	id: "marketing-afiliados-espana-primeros-euros.mdx";
  slug: "marketing-afiliados-espana-primeros-euros";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"mejores-herramientas-ia-gratis-2025.mdx": {
	id: "mejores-herramientas-ia-gratis-2025.mdx";
  slug: "mejores-herramientas-ia-gratis-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"mejores-temas-shopify-gratis-premium.mdx": {
	id: "mejores-temas-shopify-gratis-premium.mdx";
  slug: "mejores-temas-shopify-gratis-premium";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"monetizar-blog-espana-metodos-que-funcionan.mdx": {
	id: "monetizar-blog-espana-metodos-que-funcionan.mdx";
  slug: "monetizar-blog-espana-metodos-que-funcionan";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"n8n-automatizacion-ingresos-pasivos.mdx": {
	id: "n8n-automatizacion-ingresos-pasivos.mdx";
  slug: "n8n-automatizacion-ingresos-pasivos";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"shopify-vs-woocommerce-espana-2025.mdx": {
	id: "shopify-vs-woocommerce-espana-2025.mdx";
  slug: "shopify-vs-woocommerce-espana-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
