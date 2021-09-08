import { Query, Resolver, ObjectType } from '@nestjs/graphql';

@ObjectType()
class TestObject {}

@Resolver(() => TestObject)
export class AppResolver {
  @Query(() => String)
  async greet() {
    return `hello`;
  }
}
