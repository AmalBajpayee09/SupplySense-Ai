from pydantic import BaseModel
from pydantic import EmailStr
from typing import Optional

class UserRegister(BaseModel):

    tenant_id: int

    role_id: int

    first_name: str

    last_name: Optional[str]  = None

    email: EmailStr

    password: str

    phone: Optional[str] = None


class LoginRequest(BaseModel):

    email: EmailStr

    password: str


class UserResponse(BaseModel):

    user_id: int

    tenant_id: int

    role_id: int

    first_name: str

    last_name: str | None

    email: EmailStr

    phone: str | None

    is_active: bool

    class Config:
        from_attributes = True
        
class TokenResponse(BaseModel):

    access_token: str

    token_type: str

    user: dict 
    
class LoginResponseUser(BaseModel):

    user_id: int

    tenant_id: int

    role_id: int

    first_name: str

    last_name: str | None = None

    email: EmailStr


class TokenResponse(BaseModel):

    access_token: str

    token_type: str

    user: LoginResponseUser           