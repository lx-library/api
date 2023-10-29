import { z, literal, object, array, string, number, boolean } from "zod";

const Question = object({
  type: literal("QUESTION"),
  data: object({
    question: array(string()),
    subQuestion: string().optional(),
  }),
});
const BlockConnect = object({
  type: literal("BLOCK_CONNECT"),
  data: object({
    leftBlocks: object({
      heading: string(),
      data: array(string()),
    }),
    rightBlocks: object({
      heading: string(),
      data: array(string()),
    }),
  }),
});
const MultipleChoice = object({
  type: literal("MULTIPLE_CHOICE"),
  data: object({
    options: array(
      object({
        option: string(),
        isAnswer: boolean().default(false),
      })
    ),
  }),
});
const Line = object({
  type: literal("LINE"),
  data: object({
    count: number(),
    prefix: string().default(""),
  }),
});
const Image = object({
  type: literal("IMAGE"),
  data: object({
    src: string(),
    constraint: string(),
  }),
});

const Component = z.discriminatedUnion("type", [
  Question,
  BlockConnect,
  MultipleChoice,
  Line,
  Image,
]);

export const Assessment = object({
  learningObjective: object({
    id: string(),
    description: string(),
  }).optional(),
  textbook: z
    .object({
      id: string(),
      isbn: string(),
      title: string(),
    })
    .optional(),
  components: array(Component),
});
