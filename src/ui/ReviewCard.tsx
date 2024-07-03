import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";
import { Comment } from "../types/typeComments";

type ReviewCardProps = {
  name: string;
  comment: string;
  email: string
};

export const ReviewCard = ({ name, comment, email }: ReviewCardProps) => {

  return (
    <Card className="max-w-[340px] h-auto lg:mt-20 py-4">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{ name }</h4>

          </div>
        </div>

      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          { comment }
        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
    </Card>
  );
}
