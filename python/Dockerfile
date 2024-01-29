FROM python:3.10

WORKDIR /var/www/html/api

COPY . .

RUN pip3 install -r requirements.txt

CMD [ "python3", "-m" , "flask", "--debug", "run", "--host=0.0.0.0"]
