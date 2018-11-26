export declare class OffsetResolverFactory {
    static create(offset: Array<number | string> | number | string): OffsetResolver;
}
export declare class OffsetResolver {
    private offset;
    constructor(offset: Array<number | string> | number | string);
    normalizeOffset(): (string | number)[];
}
