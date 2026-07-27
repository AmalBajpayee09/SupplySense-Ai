from pydantic import BaseModel, ConfigDict


class BrandResponse(BaseModel):

    brand_id: int
    brand_name: str
    country: str | None = None

    model_config = ConfigDict(
        from_attributes=True
    )