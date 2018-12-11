export default function posts(parent:any, args:any, context:any, info:any) {
    const { linkIds } = parent
    return context.db.query.links({ where: { id_in: linkIds } }, info)  
}