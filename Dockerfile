FROM python:3.6

WORKDIR /app/

COPY ./requirements.txt ./requirements.txt

RUN pip3 install -r requirements.txt

COPY ./cordilleradigital ./cordilleradigital


CMD python ./cordilleradigital/manage.py runserver 0.0.0.0:$PORT